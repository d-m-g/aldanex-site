import Button from "../components/Button";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Section from "../components/Section";
import Textarea from "../components/Textarea";
import styles from "./ContactPreviewSection.module.css";

export default function ContactPreviewSection() {
  return (
    <Section id="contact">
      <Card className={styles.card}>
        <div className={styles.copy}>
          <Heading eyebrow="Contact" as="h2">
            Contact us
          </Heading>
          <p className={styles.text}>
            This homepage section now mirrors the current WordPress contact
            experience and keeps the real field structure in place for Phase 5.
          </p>
        </div>
        <form className={styles.form}>
          <Input id="name" label="Name" name="name" placeholder="Your name" />
          <Input
            id="phone"
            label="Phone number"
            name="phone"
            placeholder="+358..."
            type="tel"
          />
          <Input
            id="email"
            label="Email"
            name="email"
            placeholder="you@example.com"
            type="email"
          />
          <Input
            id="subject"
            label="Subject"
            name="subject"
            placeholder="Subject"
          />
          <label className={styles.selectField} htmlFor="type">
            <span className={styles.selectLabel}>Type</span>
            <select
              className={styles.select}
              defaultValue="Request"
              id="type"
              name="type"
            >
              <option>Request</option>
              <option>Question</option>
              <option>Order</option>
            </select>
          </label>
          <Textarea
            id="message"
            label="Message"
            name="message"
            placeholder="Tell us about your request."
          />
          <label className={styles.checkbox}>
            <input name="personal-data" type="checkbox" />
            <span>I allow usage of my personal data</span>
          </label>
          <div className={styles.actions}>
            <Button type="submit">Send inquiry</Button>
            <span className={styles.note}>
              Form submission goes live in Phase 5
            </span>
          </div>
        </form>
      </Card>
    </Section>
  );
}
