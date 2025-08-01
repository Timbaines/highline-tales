import ActivityList from '@/components/activity/ActivityList.jsx';

/***** MODULE STYLES *****/
import styles from '@/pages/Activities/ActivitiesPage.module.css';

export default function ActivitiesPage() {
  return (
      <>
          <h2>Activities</h2>
          <div className={styles.activitiesContainer}>
              <ActivityList layout="grid" />
          </div>
      </>

  )
}