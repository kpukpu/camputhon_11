import React, { useState, useEffect } from 'react';
import '../styles/TaskEditing.css';
import EditModal from '../modal/EditModal';
import TodayQuest from './TodayQuest';
import axios from "axios";



// Helper function to format time as HH:MM:SS
const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return [hours, minutes, secs].map(val => String(val).padStart(2, '0')).join(':');
};

const TaskEditing = () => {
    const initialAssignments = [
        { id: 1, Task: '컴퓨터 구조', dueDate: '2024-07-31T23:59', major: true, completed: false },
        { id: 2, Task: '자료구조', dueDate: '2024-08-05T23:59', major: true, completed: false },
        { id: 3, Task: '알고리즘', dueDate: '2024-07-31T23:59', major: true, completed: false },
        { id: 4, Task: '알고리즘2', dueDate: '2024-07-31T23:55', major: true, completed: false }
    ];

    const [assignments, setAssignments] = useState(initialAssignments);
    const [modalType, setModalType] = useState(null);
    const [currentAssignment, setCurrentAssignment] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDueDate, setEditDueDate] = useState('');
    const [editMajor, setEditMajor] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [newMajor, setNewMajor] = useState(false);
    const [timers, setTimers] = useState({});
    const [intervals, setIntervals] = useState({});

    useEffect(() => {
        return () => {
            Object.values(intervals).forEach(clearInterval);
        };
    }, [intervals]);

    const handleAssignmentClick = (assignment, event) => {
        if (event.target.type === 'checkbox') return;

        setCurrentAssignment(assignment);
        setEditTitle(assignment.Task);
        setEditDueDate(assignment.dueDate);
        setEditMajor(assignment.major);
        setModalType('edit')
        console.log("확인");
    };

    const handleUpdate = () => {
        setAssignments(assignments.map(assignment =>
            assignment.id === currentAssignment.id
                ? { ...assignment, Task: editTitle, dueDate: editDueDate, major: editMajor }
                : assignment
        ));
        resetModal();
    };

    const handleDelete = () => {
        setAssignments(assignments.filter(assignment => assignment.id !== currentAssignment.id));
        resetModal();
    };

    const handleCancel = () => {
        resetModal();
    };

    const handleToggleTimer = (id, event) => {
        event.stopPropagation();

        if (intervals[id]) {
            clearInterval(intervals[id]);
            setIntervals(prev => {
                const newIntervals = { ...prev };
                delete newIntervals[id];
                return newIntervals;
            });
        } else {
            const startTime = Date.now();
            const initialTime = timers[id] || 0;

            const intervalId = setInterval(() => {
                setTimers(prev => ({
                    ...prev,
                    [id]: initialTime + Math.floor((Date.now() - startTime) / 1000)
                }));
            }, 1000);

            setIntervals(prev => ({
                ...prev,
                [id]: intervalId
            }));
        }
    };

    const handleResetTimer = (id, event) => {
        event.stopPropagation();
        if (intervals[id]) {
            clearInterval(intervals[id]);
        }

        setIntervals(prev => {
            const newIntervals = { ...prev };
            delete newIntervals[id];
            return newIntervals;
        });

        setTimers(prev => ({
            ...prev,
            [id]: 0
        }));
    };

    const handleCheck = async (id) => {
        const assignment = assignments.find(assignment => assignment.id === id);
        const completed = !assignment.completed;

        setAssignments(assignments.map(assignment =>
            assignment.id === id
                ? { ...assignment, completed }
                : assignment
        ));

        if (completed && timers[id]) {
            try {
                await postTime(id, timers[id]);
            } catch (error) {
                console.error('Error posting time:', error);
            }
        }
    };

    const postTime = async (id, time) => {
        const assignment = assignments.find(a => a.id === id);

        try {
            await axios.post('http://localhost:8000/api/get_time/', {
                google_id: JSON.parse(localStorage.getItem('user'))?.user_id,
                accure: time
            });
        } catch (error) {
            console.error('Error posting time:', error);
        }
    };



    const handleAddAssignment = () => {
        const newAssignment = {
            id: assignments.length ? Math.max(...assignments.map(a => a.id)) + 1 : 1,
            Task: newTitle,
            dueDate: newDueDate,
            major: newMajor,
            completed: false
        };
    
        // 데이터 전송
        fetch('/api/todolist/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nickname: '1', // 사용자의 닉네임 ID를 여기에 넣어주세요
                task: newTitle,
                major: newMajor,
                deadline: newDueDate,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                setAssignments([...assignments, newAssignment]);
                resetModal();
            } else {
                console.error(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    const groupedAssignments = assignments.reduce((groups, assignment) => {
        const date = new Date(assignment.dueDate).toLocaleDateString();
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(assignment);
        return groups;
    }, {});

    const resetModal = () => {
        setModalType(null);
        setCurrentAssignment(null);
        setNewTitle('');
        setNewDueDate('');
        setNewMajor(false);
    };

    return (
        <div className="assignment-list">
            <TodayQuest />

            <button onClick={() => setModalType('add')}>과제 추가</button>


            {Object.entries(groupedAssignments).map(([date, assignmentsOnDate]) => (
                <div key={date}>
                    <h3>{date}</h3>
                    {assignmentsOnDate.map(assignment => (
                        <div
                            key={assignment.id}
                            className="assignment-item"
                            onClick={(event) => handleAssignmentClick(assignment, event)}
                        >
                            <div>
                                <p>{new Date(assignment.dueDate).toLocaleTimeString()} 까지</p>
                                <p>{assignment.Task}</p>
                                <p>{assignment.major ? '전공' : '비전공'}</p>
                            </div>
                            <div className="button-group">
                                <div className="timer-container">
                                    <button
                                        onClick={(event) => handleToggleTimer(assignment.id, event)}
                                    >
                                        {intervals[assignment.id] ? '중지' : '시작'}
                                    </button>
                                    <button
                                        onClick={(event) => handleResetTimer(assignment.id, event)}
                                        disabled={timers[assignment.id] === 0}
                                    >
                                        초기화
                                    </button>
                                    <span className="timer-display">
                                        {formatTime(timers[assignment.id] || 0)}
                                    </span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={assignment.completed}
                                    onChange={() => handleCheck(assignment.id)}
                                    className="checkbox-large"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <EditModal isOpen={modalType === 'edit'} onClose={resetModal}>
                <div className="modal-content">
                    <h3>편집</h3>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="제목"
                    />
                    <input
                        type="datetime-local"
                        value={editDueDate}
                        onChange={(e) => setEditDueDate(e.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={editMajor}
                            onChange={(e) => setEditMajor(e.target.checked)}
                        />
                        전공 여부
                    </label>
                    <div className="button-groupA">
                        <button onClick={handleUpdate}>저장</button>
                        <button className="delete" onClick={() => setModalType('delete')}>삭제</button>
                    </div>
                </div>
            </EditModal>
            <EditModal isOpen={modalType === 'delete'} onClose={resetModal}>
                <div className="modal-content">
                    <h3>삭제 확인</h3>
                    <p>이 과제를 삭제하시겠습니까?</p>
                    <div className="button-groupA">
                        <button onClick={handleDelete}>삭제</button>
                        <button className="cancel" onClick={handleCancel}>취소</button>
                    </div>
                </div>
            </EditModal>
            <EditModal isOpen={modalType === 'add'} onClose={resetModal}>
                <div className="modal-content">
                    <h3>과제 추가</h3>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="제목"
                    />
                    <input
                        type="datetime-local"
                        value={newDueDate}
                        onChange={(e) => setNewDueDate(e.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={newMajor}
                            onChange={(e) => setNewMajor(e.target.checked)}
                        />
                        전공 여부
                    </label>
                    <div className="button-group">
                        <button onClick={handleAddAssignment}>추가</button>
                        <button className="cancel" onClick={handleCancel}>취소</button>
                    </div>
                </div>
            </EditModal>
        </div>
    );
};

export default TaskEditing;
