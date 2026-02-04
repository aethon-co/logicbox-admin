import { useState } from 'react';
import '../Home.css';

interface Candidate {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    referralCode: string;
    referredBy: string;
    referralCount: number;
    role: string;
    isEnabled: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    referredUsers?: Candidate[];
    referredSchools?: Candidate[]; // Handling referred schools for Logicbox
    schoolName?: string;
    standard?: string;
    address?: string;
}

interface CandidatesTableProps {
    data: Candidate[];
    isLoading: boolean;
    error: Error | null;
    title: string;
}

const CandidatesTable = ({ data, isLoading, error, title }: CandidatesTableProps) => {
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    const toggleRow = (id: string) => {
        if (expandedRow === id) {
            setExpandedRow(null);
        } else {
            setExpandedRow(id);
        }
    };

    if (isLoading) return <div className="loading-container">Loading...</div>;
    if (error) return <div className="error-container">Error loading data</div>;

    const candidates = Array.isArray(data) ? data : [];

    return (
        <div className="home-container">
            <h1 className="home-title">{title}</h1>
            <div className="table-container">
                <table className="candidates-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px' }}></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Referral Code</th>
                            <th>Referrals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate: Candidate) => (
                            <>
                                <tr key={candidate._id} onClick={() => toggleRow(candidate._id)} style={{ cursor: 'pointer' }}>
                                    <td onClick={(e) => { e.stopPropagation(); toggleRow(candidate._id); }}>
                                        <button className={`expand-btn ${expandedRow === candidate._id ? 'expanded' : ''}`}>
                                            ▶
                                        </button>
                                    </td>
                                    <td><span className="candidate-name">{candidate.name}</span></td>
                                    <td>{candidate.email}</td>
                                    <td>{candidate.phoneNumber}</td>
                                    <td><span className="badge badge-referral">{candidate.referralCode}</span></td>
                                    <td><span className="referral-count">{candidate.referralCount}</span></td>
                                </tr>
                                {expandedRow === candidate._id && (
                                    <tr className="expanded-row">
                                        <td colSpan={8} style={{ padding: 0 }}>
                                            <div className="nested-table-container">
                                                {candidate.referredSchools && candidate.referredSchools.length > 0 ? (
                                                    // Table for Referred Schools
                                                    <table className="nested-table">
                                                        <thead>
                                                            <tr>
                                                                <th>School Name</th>
                                                                <th>Name</th>
                                                                <th>Standard</th>
                                                                <th>Address</th>
                                                                <th>Email</th>
                                                                <th>Phone</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {candidate.referredSchools.map((school: Candidate) => (
                                                                <tr key={school._id}>
                                                                    <td><span className="candidate-name">{school.name}</span></td>
                                                                    <td>{school.schoolName}</td>
                                                                    <td>{school.standard || '-'}</td>
                                                                    <td>{school.address || '-'}</td>
                                                                    <td>{school.email}</td>
                                                                    <td>{school.phoneNumber}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : candidate.referredUsers && candidate.referredUsers.length > 0 ? (
                                                    // Table for Referred Users
                                                    <table className="nested-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Referred User</th>
                                                                <th>Email</th>
                                                                <th>Phone</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {candidate.referredUsers.map((user: Candidate) => (
                                                                <tr key={user._id}>
                                                                    <td><span className="candidate-name">{user.name}</span></td>
                                                                    <td>{user.email}</td>
                                                                    <td>{user.phoneNumber}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                ) : (
                                                    <div className="no-referrals">No referrals found.</div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CandidatesTable;
