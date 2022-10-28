import { useParams } from 'react-router-dom'
import LessonSummary from '../dashboard/CourseSummary'
import courses from '../components/courses'
import TopBar from '../components/TopBar';

function Course() {
  const { courseId } = useParams()
  const course = courses.find(course => course.id === parseInt(courseId))
  return (
    <div>
      <TopBar />
      <div className="Course page">
        <header>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
        </header>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Course