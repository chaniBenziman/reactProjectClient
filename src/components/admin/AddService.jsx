import React from "react";
import { useForm } from "react-hook-form";
import ServiceStore from "../../stores/ServiceStore";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddService({ Setisplus }) {
    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        ServiceStore.addService(data);
        Setisplus(false);
    };

    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    fullWidth
                    label="id"
                    id="id"
                    {...register("id")}
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="name"
                    id="name"
                    {...register("name")}
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="description"
                    id="description"
                    {...register("description")}
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="price"
                    id="price"
                    {...register("price")}
                />
                <br />
                <br />
                <TextField
                    fullWidth
                    label="duration"
                    id="duration"
                    {...register("duration")}
                />
                <br />
                <br />
                <Button size="small" color="primary" type="submit">
                    save
                </Button>
            </form>
        </Box>
    );
}
