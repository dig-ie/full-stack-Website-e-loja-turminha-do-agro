using Mulungu.Loja.Domain.Contracts;
using Mulungu.Loja.Domain.Entities;

namespace Mulungu.Store.Domain.Service.Impl;

public class ProductService
{
    private readonly IProductRepository _productRepository;
    private readonly IUnitOfWork _unitOfWork;
    

    public ProductService(IUnitOfWork unitOfWork, IProductRepository productRepository)
    {
        _productRepository = productRepository;
        _unitOfWork = unitOfWork;
    }
    
    public IList<Product> FindProducts()
    {
        return _productRepository.FindAll();
    }
    public Product? FindProductById(Guid id)
    {
        return _productRepository.FindById(id);
    }

    /*public Product CreateProduct(Product prod)
    {
        var product = new Product
        {
            Id = Guid.NewGuid(), // Generate a new GUID for the product
            Name = prod.Name,
            Price = prod.Price
        };
        return product;
    }*/

    public void SaveProduct(Product prod)
    {
        //var entity = CreateProduct(prod);
        _productRepository.Save(prod);
        _unitOfWork.SaveChanges();
    }

    public void DeleteProduct(Guid id)
    {
        _productRepository.Delete(id);
        _unitOfWork.SaveChanges();
    }
    
    public void UpdateProduct(Product product)
    {
        _productRepository.Update(product);
        _unitOfWork.SaveChanges();
    }
}