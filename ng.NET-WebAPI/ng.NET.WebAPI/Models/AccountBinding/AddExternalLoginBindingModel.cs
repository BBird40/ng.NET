using System;
using System.ComponentModel.DataAnnotations;

namespace ng.NET.WebAPI.Models.AccountBinding
{
    public class AddExternalLoginBindingModel
    {
        [Required]
        [Display(Name = "External access token")]
        public string ExternalAccessToken { get; set; }
    
    }
}