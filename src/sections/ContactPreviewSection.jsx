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
            Shared form primitives are ready for the live contact flow.
          </Heading>
          <p className={styles.text}>
            This is a non-submitting preview that exercises the planned form
            components before Phase 5 adds the real endpoint and status states.
          </p>
        </div>
        <form className={styles.form}>
          <Input id="name" label="Name" name="name" placeholder="Your name" />
          <Input
            id="email"
            label="Email"
            name="email"
            placeholder="you@example.com"
            type="email"
          />
          <Textarea
            id="message"
            label="Message"
            name="message"
            placeholder="Tell us what you want the site to accomplish."
          />
          <div className={styles.actions}>
            <Button type="submit">Send inquiry</Button>
            <span className={styles.note}>Preview only for Phase 3</span>
          </div>
        </form>
      </Card>
    </Section>
  );
}
