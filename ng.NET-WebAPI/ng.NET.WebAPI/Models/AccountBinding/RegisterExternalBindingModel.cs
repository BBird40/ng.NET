using System;
using System.ComponentModel.DataAnnotations;

namespace ng.NET.WebAPI.Models.AccountBinding
{
    public class RegisterExternalBindingModel
    {
        [Required]
        [Display(Name = "Email")]
        public string Email { get; set; }
    }
}