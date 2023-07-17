import { Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Statistics from "../components/Statistics";
import { scheduleStatus } from "../features/programming/programmingSlice";

function PageStcsDaily(): React.JSX.Element {
  return (
    <Row className="g-3">
      <Helmet>
        <title>RSystfip | Statistics daily people</title>
      </Helmet>
      <Statistics scheduling_type={scheduleStatus.daily} />
    </Row>
  );
}

export default PageStcsDaily;
