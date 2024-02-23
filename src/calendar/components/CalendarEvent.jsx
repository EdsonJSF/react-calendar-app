export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <blockquote>
      <p>
        <strong className="">{title}</strong>
        <small className=""> - {user.name}</small>
      </p>
    </blockquote>
  );
};
