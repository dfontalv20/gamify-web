import React, { createContext, useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { getAllCompanies } from '../../services/company.service'
import { getAllGroups } from '../../services/group.service'
import AdminCompanyCard from './AdminCompanyCard'
import AdminCompanyModal from './AdminCompanyModal'
import AdminView from './AdminView'

export const AdminCompaniesContext = createContext();

export default function AdminCompanies() {
    const [companyModalVisible, setCompanyModalVisible] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState(null)
    const [groupFilter, setGroupFilter] = useState(0)
    const [groups, setGroups] = useState([])
    const [companies, setCompanies] = useState([])
    const [loadingCompanies, setLoadingCompanies] = useState(true)
    const [loadingGroups, setLoadingGroups] = useState(true)

    function handleCloseModal() {
        setCompanyModalVisible(false);
        setSelectedCompany(null);
    }
    function handleSelectCompany(company) {
        setCompanyModalVisible(true);
        setSelectedCompany(company);
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
    async function loadCompanies() {
        try {
            setLoadingCompanies(true);
            const res = await getAllCompanies();
            setCompanies(res.data);
        } catch (error) {
        } finally {
            setLoadingCompanies(false);
        }
    }
    useEffect(() => {
        loadGroups()
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
                loadingCompanies ?
                    <div className='w-100'>
                        <center><Spinner variant='priamry' className='m-5' /></center>
                    </div>
                    :
                    <div className='row row-cols-1 row-cols-lg-3 g-3'>
                        {
                            companies.filter(company => groupFilter ? company.groupId === groupFilter : false)
                                .map(company =>
                                    <div className='col' key={company.id}>
                                        <AdminCompanyCard company={company} onSelect={handleSelectCompany} />
                                    </div>
                                )
                        }
                    </div>
            }
            <AdminCompanyModal show={companyModalVisible} companyId={selectedCompany?.id} onClose={handleCloseModal} />
        </AdminView>
    )
}
