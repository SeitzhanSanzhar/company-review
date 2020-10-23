import React, { ReactElement } from 'react'
import { Interview } from '../../../models/Interview'

interface Props {
    addInterview: (interview: Interview) => void
}

export default function InterviewAdd({ addInterview }: Props): ReactElement {
    return (
        <div>
            <h1>add</h1>
        </div>
    )
}
