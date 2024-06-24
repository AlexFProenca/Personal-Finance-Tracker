import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                const response = await axios.get('http://localhost:5000/transactions', config);
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    const handleAddTransaction = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const newTransaction = { amount, category };
            const response = await axios.post('http://localhost:5000/transactions', newTransaction, config);
            setTransactions([...transactions, response.data]);
            setAmount('');
            setCategory('');
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <form onSubmit={handleAddTransaction}>
                <div>
                    <label>Amount:</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <button type="submit">Add Transaction</button>
            </form>
            <h3>Transactions</h3>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.id}>
                        {transaction.amount} - {transaction.category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;