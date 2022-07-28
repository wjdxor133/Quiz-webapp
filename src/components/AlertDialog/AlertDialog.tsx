import { useState } from 'react'
import { Box, Button, Dialog, DialogContent, DialogTitle, DialogContentText } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface AlertDialogProps {
  children: React.ReactNode
  status: boolean
  correct: string
}

export default function AlertDialog({ children, status, correct }: AlertDialogProps) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box onClick={handleClickOpen}>{children}</Box>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
        <DialogTitle variant='h6'>{status ? '🎉 정답!' : '❌ 오답!'}</DialogTitle>
        <DialogContent>
          {correct && <DialogContentText>{`정답은 ${correct}입니다.`}</DialogContentText>}
        </DialogContent>
        <Button
          variant='contained'
          size='large'
          endIcon={<ArrowForwardIcon />}
          onClick={handleClose}
        >
          다음 문항
        </Button>
      </Dialog>
    </>
  )
}
