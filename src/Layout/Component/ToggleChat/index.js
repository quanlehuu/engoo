import styles from "./ToggleChat.module.scss"

function ToggleChat() {
  return (
    <div className={styles.chatToggle}>
      <img
        src="https://engoo-knowledge-base.s3.amazonaws.com/cs_aoa_02.svg"
        alt="toggle chat"
      />
    </div>
  );
}

export default ToggleChat;
