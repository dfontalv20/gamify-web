import React, { useContext } from 'react'
import { UserContext } from '../../App'
import StudentInfoViewer from './StudentInfoViewer';
import StudentPrizesViewer from './StudentPrizesViewer'
import StudentRewardsViewer from './StudentRewardsViewer';
import StudentView from './StudentView'

export default function StudentHome() {
  const user = useContext(UserContext);

  return (
    <StudentView>
      <div className="row g-5">
        <div className="col-12 col-lg-4">
          <StudentInfoViewer student={user.student} />
        </div>
        <div className="col-12 col-lg-4">
          <StudentPrizesViewer prizes={user.student.prizes} />
        </div>
        <div className="col-12 col-lg-4">
          <StudentRewardsViewer rewards={user.student.rewards} />
        </div>
      </div>

    </StudentView>
  )
}
