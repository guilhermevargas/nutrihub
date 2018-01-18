<template>
<div>
  <div class="row">
	  <form class="col s12">
			 		
    <div class="row">
       <div class="input-field col s6">
							<input placeholder="Placeholder" v-model="first_name" id="first_name" type="text" class="validate">
							<label for="first_name">First Name</label>
        		</div>
        
						<div class="input-field col s6">
							<input id="last_name" v-model="last_name" type="text" class="validate">
							<label for="last_name">Last Name</label>
						</div>
      		</div>
			 
		
		
					<div class="row">
						<div class="input-field col s12">
							<input id="password" v type="password" class="validate">
							<label for="password">Password</label>
						</div>
					</div>

					<div class="row">
						<div class="input-field col s12">
							<input id="email" type="email" class="validate">
							<label for="email">Email</label>
						</div>
					</div>

					<div class="row">
						<div class="col s12">
							This is an inline input field:
							<div class="input-field inline">
								<input id="email" type="email" class="validate">
								<label for="email" data-error="wrong" data-success="right">Email</label>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col s12">
							<div class="input-field inline">
								<button class="btn waves-effect waves-light" type="submit" name="action">Pronto
								<i class="material-icons right">send</i>
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
		date() {
			return {
				firstName: "",
				lastName: "",
				email: "",
				password: ""
			}
		},
		actions: {
			salvar() {
				const user = {
					firstName: this.firstName,
					lastName:  this.lastName,
					email:     this.email,
					password:  this.password
				}

				console.log("criating user " + user);
			}
		}
	}
</script>
<style>
	
</style>