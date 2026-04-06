import styles from "./Heading.module.css";

export default function Heading({
  as: Tag = "h2",
  eyebrow,
  align = "left",
  children,
}) {
  return (
    <div className={styles.wrapper} data-align={align}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Tag className={styles.heading}>{children}</Tag>
    </div>
  );
}
