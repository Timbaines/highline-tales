import ActivityList from '@/components/activity/ActivityList';

/***** MODULE STYLES *****/
import styles from '@/pages/ActivitiesPage.module.css';

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