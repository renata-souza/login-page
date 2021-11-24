import styles from './LinkButton.module.css'

function LinkButton({type, text}) {
    
    return (
        <button 
            className={styles.btn} 
            type={type}>{text}
        </button>
    )
}

export default LinkButton
