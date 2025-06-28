import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>

      <Card title="Card Component">
        <p>This is content inside a reusable card.</p>
      </Card>
    </div>
  );
}

export default Home;
