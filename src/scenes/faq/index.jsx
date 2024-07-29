import { Box, useTheme, Typography } from "@mui/material"
import Header from '../../components/Header'
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Quiestions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question 1
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a fugit quos magni earum vitae labore minima facere maxime consectetur alias mollitia. Sapiente ab, accusantium natus consequatur quia ratione totam!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question 2
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a fugit quos magni earum vitae labore minima facere maxime consectetur alias mollitia. Sapiente ab, accusantium natus consequatur quia ratione totam!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question 3
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a fugit quos magni earum vitae labore minima facere maxime consectetur alias mollitia. Sapiente ab, accusantium natus consequatur quia ratione totam!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question 4
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a fugit quos magni earum vitae labore minima facere maxime consectetur alias mollitia. Sapiente ab, accusantium natus consequatur quia ratione totam!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question 5
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a fugit quos magni earum vitae labore minima facere maxime consectetur alias mollitia. Sapiente ab, accusantium natus consequatur quia ratione totam!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important question 6
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, a fugit quos magni earum vitae labore minima facere maxime consectetur alias mollitia. Sapiente ab, accusantium natus consequatur quia ratione totam!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ