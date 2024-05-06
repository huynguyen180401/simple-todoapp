import React from 'react';
import { ITask } from '../../../types/tasks';
import Task from './Task';

interface TodoListProps {
    tasks: ITask[];
}

export default function TodoList({ tasks }: TodoListProps) {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
