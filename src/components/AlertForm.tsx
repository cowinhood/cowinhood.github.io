import React, { useState } from "react";
import { createStyles, useTheme } from "@material-ui/core/styles";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TelegramIcon from "@material-ui/icons/Telegram";
import TextField from "@material-ui/core/TextField";
import { Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import data from "../data.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const AlertForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedGroup, setSelectedGroupd] = useState("");

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      boxShadow={theme.shadows[1]}
      bgcolor={theme.palette.primary.contrastText}
      padding={theme.spacing(0.5)}
      borderRadius={8}
    >
      <Box marginBottom={theme.spacing(0.5)}>
        <Typography variant="h4">Telegram Alerts</Typography>
        <Typography variant="subtitle1">(Age group: 18-44)</Typography>
      </Box>
      <Box>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.open(`https://t.me/${selectedGroup}`, "_blank"); //to open new page
          }}
        >
          <Box marginBottom={theme.spacing(0.5)}>
            <Autocomplete
              id="search-cities"
              options={data.telegram_bots}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="City" variant="outlined" />
              )}
              onChange={(_, val) => {
                if (!!val && !!val.chat_id) {
                  setSelectedGroupd(val.chat_id);
                }
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<TelegramIcon />}
            disabled={!selectedGroup}
            type="submit"
          >
            Join {selectedGroup}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AlertForm;