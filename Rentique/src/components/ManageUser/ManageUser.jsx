import React, { useEffect, useState } from 'react';
import './Manage.css';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);  // Track loading state
    const [error, setError] = useState(null);  // Track errors

    // Fetch users from backend
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8080/userInfo');
            const data = await response.json();
            setUsers(Array.isArray(data) ? data : data.users || []);
        } catch (error) {
            setError('Error fetching users. Please try again later.');
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);  // Stop loading state
        }
    };

    // Load users when the component mounts
    useEffect(() => {
        fetchUsers();
    }, []);

    // Delete user from backend
    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/users/${userId}`, { method: 'DELETE' });
            if (response.ok) {
                fetchUsers();  // Re-fetch users after deletion
            } else {
                setError('Error deleting user. Please try again later.');
            }
        } catch (error) {
            setError('Error deleting user. Please try again later.');
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="manage-section">
            <h2>Manage Users</h2>

            {loading && <p>Loading users...</p>}
            {error && <p className="error-message">{error}</p>}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <button onClick={() => handleDeleteUser(user.id)} className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;
