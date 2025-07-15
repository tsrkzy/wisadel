<script setup lang="ts">
import InputErrorMessage from "@/components/common/InputErrorMessage.vue";
import InputFormEmail from "@/components/common/InputFormEmail.vue";
import { Button } from "@/components/ui/button";
import { zEmail, zPassword } from "@/schema/auth.ts";
import { toTypedSchema } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";
import * as z from "zod";

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

<template>
  <form @submit="onSubmit">
    <InputFormEmail name="email" v-model="email" />
    <InputErrorMessage :message="errors.email" />
    <InputFormEmail name="password" v-model="password" />
    <InputErrorMessage :message="errors.password" />
    <Button>Subscribe Newsletter</Button>
  </form>
</template>
