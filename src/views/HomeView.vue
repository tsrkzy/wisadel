<template>
  <div>
    <h1 class="text-3xl font-bold underline">home</h1>
    <p>Welcome to the home page!</p>
    <form @submit="onSubmit">
      <input name="email" v-model="email" type="email" />
      <span>{{ errors.email }}</span>
      <input name="password" v-model="password" type="password" />
      <span>{{ errors.password }}</span>
      <Button>Subscribe Newsletter</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useField, useForm } from "vee-validate";
import { zEmail, zPassword } from "@/schema/auth.ts";
import { Button } from "@/components/ui/button";

const validationSchema = toTypedSchema(
  z.object({
    email: zEmail,
    password: zPassword,
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    email: "",
    password: "",
  },
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values) => {
  console.log("Form submitted with values:", values);
});
</script>
