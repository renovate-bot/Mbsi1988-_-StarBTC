import { Box, Card, Grid, Grid2Props, Typography } from "@mui/material";
import { FC, ReactNode, isValidElement, memo } from "react";

import { TEXT_INACTIVE_COLOR, TEXT_INVERTED_COLOR } from "../../../constants";

type CardTableItemProps = {
  title?: ReactNode;
  subTitle?: ReactNode;
  opacity?: number;
  data: Array<{ title: ReactNode; value: ReactNode; xs?: number }>;
} & Pick<Grid2Props, "onClick">;

export const CardTableItem: FC<CardTableItemProps> = memo((props) => {
  const { data, title, subTitle, opacity = 1, ...rest } = props;
  return (
    <Grid
      component={Card}
      container
      rowSpacing={"12px"}
      columnSpacing={"12px"}
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      padding="12px"
      style={{ opacity }}
      {...rest}
    >
      {title && (
        <Grid item xs={4} fontSize="14px">
          <Box paddingBottom="4px">{title}</Box>
          <Box fontSize="14px">{subTitle}</Box>
        </Grid>
      )}
      {data.map(({ title, value, xs }, key) => (
        <Grid item key={`${key}_${title}_${value}`} xs={xs ?? 4}>
          {isValidElement(title) ? (
            title
          ) : (
            <Typography
              color={TEXT_INACTIVE_COLOR}
              fontWeight={700}
              fontSize="14px"
              paddingBottom="4px"
              style={{ overflowWrap: "anywhere" }}
            >
              {title}
            </Typography>
          )}
          <Typography
            component="div"
            color={TEXT_INVERTED_COLOR}
            fontSize="12px"
            style={{ overflowWrap: "anywhere" }}
          >
            {value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
});
