import styles from './Profile.module.css'
import pic from '../../img/profile.svg'

function Profile() {
    return (
        <div className={styles.profile}>
            <img src={pic} alt="" />
            <h1>Name</h1>
        </div>
    )
}

export default Profile
