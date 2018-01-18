<template>
<div>
  <div class="row">
    <form class="col s12" @submit="onSubmit()">

      <div class="row">
        <div class="input-field col s12">
          <input
            v-model="user.name"
            id="name"
            type="text"
            class="validate" />

          <label for="name">Nome</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="email" v-model="user.email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <div class="input-field s12">
            <input id="email" type="email" class="validate">
            <label for="email" data-error="wrong" data-success="right">Confirmação de Email</label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="password" v-model="user.password" type="password" class="validate">
          <label for="password">Senha</label>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <button
              class="btn waves-effect waves-light"
              type="submit" name="action">
              <i class="material-icons right">pronto</i>
          </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</template>


<script>
export default {
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
    },
  }),
  methods: {
    buildUser() {
      return {
        name: this.name,
        email: this.email,
        password: this.password,
      };
    },
    onSubmit() {
      console.log(this.user);
      this.$store.dispatch('salvar', this.user);
    },
  },
};
</script>
<style>

</style>
