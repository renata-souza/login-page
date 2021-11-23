import styles from './LinkButton.module.css'

function LinkButton({event, type, text}) {
    return <button className={styles.btn} onClick={event} type={type}>{text}</button>
}

export default LinkButton
