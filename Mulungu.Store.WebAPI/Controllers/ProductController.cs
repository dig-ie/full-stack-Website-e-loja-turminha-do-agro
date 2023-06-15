using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mulungu.Loja.Domain.Contracts;
using Mulungu.Loja.Domain.Entities;
using Mulungu.Store.Domain.Service.Impl;

namespace Mulungu.Store.WebAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly ProductService _productService;
    private readonly IUnitOfWork _unitOfWork;
    
    public ProductController(IUnitOfWork unitOfWork, ProductService productService)
    {
        _unitOfWork = unitOfWork;
        _productService = productService;
    }

    [HttpGet] // Query parameter
    public IActionResult GetProducts()
    {
        var products = _productService.FindProducts();
        return Ok(products);
    }
    //Path parameter, Query parameter
    
    [HttpGet]
    [Route("{id}")]// Query parameter
    public IActionResult GetProductById(Guid id)
    {
        var product = _productService.FindProductById(id);
        return Ok(product);
    }
    
    [HttpPost]
    public IActionResult CreateProduct(Product prod)
    {
        _productService.SaveProduct(prod);
        var resourceUri = Url.Action("GetProductById", new { id = prod.Id });
        return Created(resourceUri, prod);
    }
    
    [HttpDelete]
    [Route("{id}")]
    public IActionResult DeleteProduct(Guid id)
    {
        _productService.DeleteProduct(id);

        return NoContent();
    }
    [HttpPut]
    [Route("{id}")]
    public IActionResult UpdateProduct(Product product)
    {
        if (!ModelState.IsValid)
        {
            // Return validation errors
            return BadRequest(ModelState);
        }

        try
        {
            _productService.UpdateProduct(product);
           
            return Ok($"Product with ID {product.Id} updated successfully");
        }
        catch (Exception ex)
        {
            // Log the exception
            return StatusCode(500, "An error occurred while updating the product.");
        }
    }

}