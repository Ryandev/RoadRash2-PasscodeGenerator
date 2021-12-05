import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BikeDropdown from "../components/BikeDropdown";
import LevelDropdown from "../components/LevelDropdown";
import CashTextEntry from "../components/CashTextEntry";
import ToggleButtonForQualifier, {
    IQualifierLevel,
} from "../components/ToggleButtonForQualifier";

import model from "../model";
import { IGameState } from "../model/GameState";
import sanitize from "../model/sanitize";
import validate from "../model/validate";

function PasscodeGenerator(): JSX.Element {
    const [gameState, setGameState] = useState<IGameState>(
        model.firstBootState()
    );
    const [passcode, setPasscode] = useState<string>(model.encode(gameState));
    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        setPasscode(model.encode(sanitize(gameState)));
        setStatus(validate(gameState).info);
    }, [gameState]);

    const setPartialGameState = (stateIn: Partial<IGameState>) => {
        setGameState((stateOld) => ({
            ...stateOld,
            ...stateIn,
        }));
    };

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 3, sm: 5 }}
            sx={{ padding: "10px", margin: "auto" }}
        >
            <Grid item xs={3}>
                <Box padding={2}>
                    <Typography variant="h6">Road Rash II Passcode Generator</Typography>
                </Box>
            </Grid>
            <Grid item xs={3} sm={3}>
                <Paper style={{ boxShadow: "none" }}>
                    <BikeDropdown
                        value={gameState.bike}
                        onChange={(bike) => setPartialGameState({ bike })}
                    />
                </Paper>
            </Grid>
            <Grid item xs={3} sm={2}>
                <Paper sx={{ boxShadow: "none" }}>
                    <LevelDropdown
                        value={gameState.level}
                        onChange={(level) => setPartialGameState({ level })}
                    />
                </Paper>
            </Grid>
            <Grid item xs={3} sm={5}>
                <Paper sx={{ boxShadow: "none" }}>
                    <InputLabel>{"Cash"}</InputLabel>
                    <CashTextEntry
                        value={gameState.cash}
                        onChange={(cash) => setPartialGameState({ cash })}
                    />
                </Paper>
            </Grid>
            <Grid item xs={1} sm={1}>
                <ToggleButtonForQualifier
                    qualifier={IQualifierLevel.Alaska}
                    selected={gameState.beatenLevelAlaska}
                    onChange={(beatenLevelAlaska) =>
                        setPartialGameState({ beatenLevelAlaska })
                    }
                />
            </Grid>
            <Grid item xs={1} sm={1}>
                <ToggleButtonForQualifier
                    qualifier={IQualifierLevel.Arizona}
                    selected={gameState.beatenLevelArizona}
                    onChange={(beatenLevelArizona) =>
                        setPartialGameState({ beatenLevelArizona })
                    }
                />
            </Grid>
            <Grid item xs={1} sm={1}>
                <ToggleButtonForQualifier
                    qualifier={IQualifierLevel.Hawaii}
                    selected={gameState.beatenLevelHawaii}
                    onChange={(beatenLevelHawaii) =>
                        setPartialGameState({ beatenLevelHawaii })
                    }
                />
            </Grid>
            <Grid item xs={2} sm={1}>
                <ToggleButtonForQualifier
                    qualifier={IQualifierLevel.Tennessee}
                    selected={gameState.beatenLevelTennessee}
                    onChange={(beatenLevelTennessee) =>
                        setPartialGameState({ beatenLevelTennessee })
                    }
                />
            </Grid>
            <Grid item xs={1} sm={1}>
                <ToggleButtonForQualifier
                    qualifier={IQualifierLevel.Vermont}
                    selected={gameState.beatenLevelVermont}
                    onChange={(beatenLevelVermont) =>
                        setPartialGameState({ beatenLevelVermont })
                    }
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    error={status.length > 0}
                    helperText={status}
                    label="Passcode"
                    value={passcode}
                    variant="filled"
                    sx={{ pointerEvents: "none", width: "100%" }}
                />
            </Grid>
        </Grid>
    );
}

export default PasscodeGenerator;
