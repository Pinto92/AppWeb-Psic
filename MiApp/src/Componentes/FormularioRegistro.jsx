import React from "react";
import { useForm } from "react-hook-form";

const FormularioRegistro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // No enviamos datos a ninguna parte, solo simulamos la funcionalidad
    const onSubmit = (data) => {
        alert("Formulario enviado correctamente (simulado).");
        console.log("Datos simulados:", data);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Registro</h2>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                {/* Campo: Nombre de usuario */}
                <div style={styles.field}>
                    <label style={styles.label}>Nombre de usuario</label>
                    <input
                        type="text"
                        {...register("username", { required: "El nombre de usuario es obligatorio" })}
                        style={styles.input}
                    />
                    {errors.username && <p style={styles.error}>{errors.username.message}</p>}
                </div>

                {/* Campo: Contraseña */}
                <div style={styles.field}>
                    <label style={styles.label}>Contraseña</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: {
                                value: 6,
                                message: "La contraseña debe tener al menos 6 caracteres"
                            }
                        })}
                        style={styles.input}
                    />
                    {errors.password && <p style={styles.error}>{errors.password.message}</p>}
                </div>

                {/* Botón de enviar */}
                <button type="submit" style={styles.button}>
                    Registrar
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "24px",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    field: {
        marginBottom: "15px",
    },
    label: {
        marginBottom: "5px",
        fontSize: "16px",
        color: "#555",
    },
    input: {
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    button: {
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
    },
    error: {
        fontSize: "14px",
        color: "red",
        marginTop: "5px",
    },
};

export default FormularioRegistro;
