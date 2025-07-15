<template>
  <div>
    <h1>home</h1>
    <p>Welcome to the home page!</p>
    <form @submit="onSubmit">
      <input name="email" v-model="email" type="email"/>
      <span>{{ errors.email }}</span>
      <input name="password" v-model="password" type="password"/>
      <span>{{ errors.password }}</span>
      <button>sign up for newsletter</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useField, useForm } from "vee-validate";

const validationSchema = toTypedSchema(
    z.object({
      email: z.email({ message: 'Must be a valid email' }).min(1, { message: 'This is required' }),
      password: z.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
    })
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit(values => {
  console.log("Form submitted with values:", values);
})

</script>