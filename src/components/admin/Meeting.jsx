import Paper from '@mui/material/Paper';
import MeetingStore from '../../stores/MeetingStore';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';
const Meeting = observer(() => {
    const getColor = (meetingDate) => {
        const today = new Date();
        const weekAfterNow = new Date();
        weekAfterNow.setDate(weekAfterNow.getDate() + 7);

        if (new Date(meetingDate) <= today) {
            return "#f44336"; 
        } else if (new Date(meetingDate) <= weekAfterNow) {
            return "#ffb74d";
        } else {
            return "#9ccc65"; 
        }
    };

    return (
        <>
            {MeetingStore.MeetingList.slice().sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime))
                .map((x, i) => <ShowMeeting key={i} meeting={x} color={getColor(x.dateTime)} />)}
        </>
    );
});
export default Meeting;

export function ShowMeeting(props) {
    const { color, meeting } = props;
    const formattedDate = dayjs(meeting.dateTime).format('YYYY-MM-DD HH:mm:ss');

    return (
        <Paper
            elevation={3}
            sx={{
                width: 320,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            <p><strong>Service Type:</strong> {meeting.serviceName}</p>
            <p><strong>Client Name:</strong> {meeting.clientName}</p>
            <p><strong>Client Phone:</strong> {meeting.clientPhone}</p>
            <p><strong>Client Email:</strong> {meeting.clientEmail}</p>
            <p><strong>Date:<span style={{ color: color }}>{formattedDate}</span></strong> </p>
        </Paper>
    );
}