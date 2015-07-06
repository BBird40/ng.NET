using System;
using System.ComponentModel.DataAnnotations;

namespace ng.NET.WebAPI.Models.AccountBinding
{
    public class RemoveLoginBindingModel
    {
        [Required]
        [Display(Name = "Login provider")]
        public string LoginProvider { get; set; }

        [Required]
        [Display(Name = "Provider key")]
        public string ProviderKey { get; set; }
    
    }
}