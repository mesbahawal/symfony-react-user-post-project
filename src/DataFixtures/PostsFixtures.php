<?php

namespace App\DataFixtures;

use App\Entity\Posts;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class PostsFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);

        $article = new Posts();
        $article->setTitle('Article-1');
        $article->setText('Good description');
        $article->setDate(\DateTime::createFromFormat('Y-m-d', date('Y-m-d')));
        $article->setVisible(1);
        $article->setPostedBy(1);
        $manager->persist($article);

        $article = new Posts();
        $article->setTitle('Article-2');
        $article->setText('Better description');
        $article->setDate(\DateTime::createFromFormat('Y-m-d', date('Y-m-d')));
        $article->setVisible(1);
        $article->setPostedBy(1);
        $manager->persist($article);

        $manager->flush();
    }
}
