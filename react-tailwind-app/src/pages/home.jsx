import Layout from "../layout/Layout";
import Card from "../components/card";
import Button from "../components/Button";

function Home() {
  return (
    <Layout>
      <Card title="Welcome">
        <p>This is the home page content.</p>
        <div className="mt-4 space-x-2">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </Card>
    </Layout>
  );
}

export default Home;
