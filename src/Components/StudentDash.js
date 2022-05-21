import React from 'react';
import Student from './Student';

class StudentDash extends React.Component {
  //  filter through students for matches to their cohortCodes

  chooseStudent = (data, currentCohort) => {
    if (currentCohort === 'All Students') {
      return data; // i'll need all 250 students
    } else {
      return data.filter((stu) => {
        return stu.cohort.cohortCode === currentCohort;
      });
    }
  };

  showCohortStudents = (data, currentCohort, showMore, showMoreHandler) => {
    return this.chooseStudent(data, currentCohort).map((stud) => {
      return (
        <Student
          key={stud.id} //or idx
          showMore={showMore}
          showMoreHandler={showMoreHandler}
          studentDeets={stud}
        />
      );
    });
  };

  formatCohort = (cohort) => {
    if (cohort === 'All Students') return 'All Students';
    return `${cohort.substring(0, cohort.length - 4)} ${cohort.substring(
      cohort.length - 4
    )}`;
  };

  render() {
    const { data, currentCohort, showMore, showMoreHandler } = this.props;

    const cards = this.showCohortStudents(
      data,
      currentCohort,
      showMore,
      showMoreHandler
    );
    return (
      <div className="studentDash">
        <h2>{this.formatCohort(currentCohort)}</h2>
        <h3>Total Students: {cards.length}</h3>
        {cards}
      </div>
    );
  }
}

export default StudentDash;
