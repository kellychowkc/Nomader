import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router'

import { createTheme } from '@mui/material/styles'

export default function FloatingActionButtons() {
    const navigate = useNavigate()
    return (
        <Box
            sx={{ '& > :not(style)': { m: 1 } }}
            onClick={() => {
                navigate('/newPost')
            }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>
    )
}
