<script setup lang="ts">
import { useForm } from 'vee-validate'
import type { Emitter } from 'mitt'
import { useAuthStore } from '../auth.store'
import type { ILoginData } from '../auth.interface'
import type { ToastMessageEvent } from '@/common/messages/toast-message/messages.enum'
import type { MittEvents } from '@/plugins/mitt'

const emit = defineEmits<{
  (
    e: ToastMessageEvent.LOGIN_TOAST_MESSAGE,
    data: { message?: string; messageType?: string; active: boolean },
  ): void
}>()
const router = useRouter()
const authStore = useAuthStore()
const inputType = ref('password')
const emitter = <Emitter<MittEvents>>inject('emitter')

const loginSchema = {
  email: 'required|email',
  password: 'required|min:3',
}

const initialValues = {
  email: '',
  password: '',
}

const { handleSubmit, values, errors } = useForm<ILoginData>({
  validationSchema: loginSchema,
  initialValues,
})

function isFilledOut() {
  return Object.keys(values).every(
    key => values[key as keyof typeof values],
  )
}

emitter.on('changeInputType', (type: string) => {
  inputType.value = type
})

const onSubmit = handleSubmit(async (values) => {
  await authStore.login(
    {
      email: values.email,
      password: values.password,
    },
    { emit, router },
  )
})
</script>

<template>
  <form

    flex-col items-center text-dark dark:text-white
    @submit="onSubmit"
  >
    <div
      class="form-element"
      flex-col
      justify-items-start
    >
      <RegisterInput
        flex-col
        justify-items-start
        class="ct-basis-45"
        label-content="Email:"
        label-name="email"
        :error-detail="errors.email || ''"
      >
        <template #input>
          <InputText
            input-name="email"
            input-style="input-format"
          />
        </template>
      </RegisterInput>
    </div>
    <a-button type="primary">
      Primary Button
    </a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">
      Dashed Button
    </a-button>

    <div
      class="form-element"
      flex-col
    >
      <RegisterInput
        relative
        flex-col
        justify-items-start
        class="ct-basis-45"
        label-content="Password:"
        label-name="password"
        :error-detail="errors.password || ''"
      >
        <template #input>
          <BaseInput
            input-name="password"
            :input-type="inputType"
            input-style="input-format"
          />
        </template>
        <ContentToggler

          absolute right-0 top-0 bg-white dark:bg-gray-800
        />
      </RegisterInput>
    </div>

    <div
      flex-row
      justify-between
      class="w-1/2"
    >
      <p

        self-center text-sm text-dark dark:text-white
      >
        Not a member yet?
        <router-link
          underline
          to="/register"
        >
          Sign up
        </router-link>
      </p>
      <button
        type="submit"
        :disabled="!isFilledOut()"
        btn-submit
      >
        Sign in
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  form {
    margin: 1rem 0 1rem;
    width: 85%;
    padding: 2rem 0 1rem;

    & > .form-element {
      width: 50%;
      height: 7rem;
    }
  }

  i::after {
    content: '';
    display: block;
    width: 0;
    margin-left: 50%;
    border: 1px solid transparent;
    transition: all 0.5s ease-in-out;
  }

  input:focus + .light::after {
    width: 100%;
    margin: 0;
    border-color: #241c04;
  }

  input:focus + .dark:after {
    width: 100%;
    margin: 0;
    border-color: #ffffff;
  }

  .error-message {
    color: #f44336;
    font-size: 0.8rem;
  }

  label {
    text-align: left;
    align-self: auto;
  }

  button {
    padding: 0.25rem;
    margin: 1rem 0;
  }
</style>
