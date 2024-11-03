import React, {Component} from "react";

class StudentInfo extends Component {
    render () {
        return <>
            <p><strong>{this.props.student_id}</strong></p>
            <p>{this.props.student_name}</p>
            <p>{this.props.college}</p>
        </>
    }
}

export default StudentInfo;