import { connect } from 'react-redux';
import { hide, getExampleData } from './../../stores/modules/examples';
import './Examples.css';


const Examples = (props) => {
  const example = props?.config[props.activeExample];
  const showPopup = example !== undefined;

  const closePopup = (e) => e.currentTarget === e.target && props.hide();

  return (
    <div className={`examples-container ${showPopup ? 'examples-container--active' : ''}`} onClick={closePopup}>
      {showPopup ? (
        <div className="examples-content">
          <label>{example.name} ({example.type})</label>
          <pre>
            {example.code}
          </pre>
        </div>
      ) : null}
    </div>
  )
};

export default connect((state) => getExampleData(state), { hide })(Examples);