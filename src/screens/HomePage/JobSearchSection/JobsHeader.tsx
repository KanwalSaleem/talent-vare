import { Box, Link, Typography } from "@mui/material"

type Props = {
    title: string;
    description: string
}

export const JobsHeader = ({ title, description }: Props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight={600} color="text.primary">
               {title}
            </Typography>
            <Link href="#" underline="always" color="primary" fontSize={14} fontWeight={500}>
              {description}
            </Link>
        </Box>
    )
}