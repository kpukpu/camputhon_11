import React, {useState} from "react";
import '../styles/TaskEditing.css';

const TodayQuest = () => {
    const [exampleTask, setExampleTask] = useState({
        Task: '백준 7576 문제 풀기',
        completed: false
    });

    const handleCheck = () => {
        setExampleTask(prevTask => ({
            ...prevTask,
            completed: !prevTask.completed
        }));
    };

    return (
        <div className="today-quest">
            <h3>Today's Quest</h3>
            <div className="assignment-item">
                <div>
                    <p>{exampleTask.Task}</p>
                </div>
                <div className="button-group">
                    <input
                        type="checkbox"
                        checked={exampleTask.completed}
                        onChange={handleCheck}
                        className="checkbox-large"
                    />
                </div>
            </div>
        </div>
    );
};

export default TodayQuest;
