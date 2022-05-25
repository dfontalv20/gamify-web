import React, { createContext, useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap';
import { getAllCompanies } from '../../services/company.service';
import { getAllGroups } from '../../services/group.service';
import { getAllUsers } from '../../services/user.service';
import AdminAssignRewardModal from './AdminAssignRewardModal';
import AdminStudentCard from './AdminStudentCard';
import AdminView from './AdminView'

export const AdminStudentsContext = createContext();

export default function AdminStudents() {
    const [rewardsModalVisible, setRewardsModalVisible] = useState(false)
    const [rewardsStudent, setRewardsStudent] = useState(null)
    const [groupFilter, setGroupFilter] = useState(0)
    const [groups, setGroups] = useState([])
    const [users, setUsers] = useState([])
    const [companies, setCompanies] = useState([])
    const [loadingUsers, setLoadingUsers] = useState(false)
    const [loadingGroups, setLoadingGroups] = useState(true)

    function handleCloseModal() {
        setRewardsModalVisible(false);
        setRewardsStudent(null);
    }

    function handleAssignReward(student) {
        setRewardsStudent(student);
        setRewardsModalVisible(true);
    }

    async function loadGroups() {
        try {
            setLoadingGroups(true);
            const res = await getAllGroups();
            const groups = res.data
            setGroups(groups);
            if (groups.length > 0) setGroupFilter(groups[0].id);
        } catch (error) {
        } finally {
            setLoadingGroups(false);
        }
    }
    async function loadStudents() {
        try {
            setLoadingUsers(true);
            const res = await getAllUsers();
            setUsers(res.data);
        } catch (error) {
        } finally {
            setLoadingUsers(false);
        }
    }
    async function loadCompanies() {
        try {
            const res = await getAllCompanies();
            setCompanies(res.data);
        } catch (error) {
        }
    }
    useEffect(() => {
        loadGroups()
        loadStudents()
        loadCompanies()
    }, [])

    return (
        <AdminView>
            <div className='w-100 d-flex justify-content-end align-items-center my-2'>
                <label className='me-2'>Grupo</label>
                {
                    loadingGroups ?
                        <Spinner variant='primary' animation='border' />
                        :
                        <Form.Select className='w-auto' value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
                            {
                                groups.map(group => <option value={group.id} key={group.id}>{group.description}</option>)
                            }
                        </Form.Select>
                }
            </div>
            {
                loadingUsers ?
                    <div className='w-100'>
                        <center><Spinner variant='priamry' className='m-5' /></center>
                    </div>
                    :
                    <AdminStudentsContext.Provider value={{ companies, groups }}>
                        <div className='row row-cols-1 row-cols-lg-3 g-3'>
                            {
                                users.filter(user => groupFilter ? user.student && user.student.groupId === groupFilter : false)
                                    .map(user =>
                                        <div className='col' key={user.id}>
                                            <AdminStudentCard student={user} onAssignReward={handleAssignReward} />
                                        </div>
                                    )
                            }
                        </div>
                    </AdminStudentsContext.Provider>
            }
            <AdminAssignRewardModal show={rewardsModalVisible} student={rewardsStudent} onClose={handleCloseModal} onAssign={() => loadStudents()}/>
        </AdminView>
    )
}
