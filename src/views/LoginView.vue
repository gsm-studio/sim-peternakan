<template>
    <div class="login-page min-vh-100 d-flex flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 mt-5">
            <div class="card-group d-block d-md-flex row">
              <div class="card col-md-7 p-4 mb-0">
                <div class="card-body">
                  <h5 class="text-center mb-3 color-text-rossa">Welcome</h5>
                  <div class="text-center mb-3">
                    <img class="text-center mx-auto" src="@/assets/img/rossa.png" alt="Image Rossa">
                  </div>
                  
                  <p class="text-medium-emphasis mb-5">Lorem ipsum dolor sit amet consectetur. Elit pretium hac gravida nullam phasellus</p>
                  <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                    <div class="mb-4">
                      <Field name="username" type="text" placeholder="Email atau nomor telepon" class="form-control" :class="{ 'is-invalid': errors.username }" />
                      <div class="invalid-feedback">{{errors.username}}</div>
                      <small class="form-text color-text-rossa">Lupa email?</small>
                    </div>
                    <div class="mb-4">
                      <Field name="password" placeholder="Password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                      <div class="invalid-feedback">{{errors.password}}</div>
                      <small class="form-text color-text-rossa">Lupa password?</small> <br>
                      <small class="form-text color-text-rossa">Belum pernah daftar? <span>Sign in</span></small>
                    </div>
                    <div class="row">
                      <div class="col-12 text-end">
                        <button class="btn btn-success px-4 text-end text-light" type="submit" :disabled="isSubmitting">
                          Masuk
                          <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                        </button>
                      </div>
                    </div>
                    <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
                  </Form>
                </div>
              </div>
            
            </div>
          </div>
          <div class="col-lg-7">
            <div class="d-flex align-items-end h-100">
              <img class="img-fluid" src="@/assets/img/ayam.png" alt="Image Login Page">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import router  from '@/router';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
if (authStore.user) {
    router.push('/');
}

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

function onSubmit(values, { setErrors }) {
    const authStore = useAuthStore();
    const { username, password } = values;

    return authStore.login(username, password)
        .catch(error => 
        console.log(error) ||
        setErrors({ apiError: error }));
    
}
</script>