import Card from "../components/Card";

const Easybank = () => {
  return (
    <div className="container">
      <div className="title-bank flow mb-space-2xl">
        <h2> Why choose Easybank?</h2>
        <p className="text-gray-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <Card></Card>
    </div>
  );
};

export default Easybank;
