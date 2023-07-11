import PropTypes from 'prop-types';
import Button from '../Button/Button';

const FeedbackOptions = ({ leaveFeedback }) => {
    return (
        <>
            <Button type="button" onClick={() => leaveFeedback('neutral')}>
                neutral
            </Button>
            <Button type="button" onClick={() => leaveFeedback('good')}>
                good
            </Button>
            <Button type="button" onClick={() => leaveFeedback('bad')}>
                bad
            </Button>
        </>
    );
};

FeedbackOptions.propTypes = {
    leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
