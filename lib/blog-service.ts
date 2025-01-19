import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  getDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { Blog, BlogFormData } from "@/types/blog";

const BLOGS_PER_PAGE = 10;
const COLLECTION_NAME = "blog_posts";

export async function getBlogs(page: number = 1, lastVisible?: any) {
  try {
    let q = query(
      collection(db, COLLECTION_NAME),
      orderBy("date", "desc"),
      limit(BLOGS_PER_PAGE)
    );

    if (page > 1 && lastVisible) {
      q = query(
        collection(db, COLLECTION_NAME),
        orderBy("date", "desc"),
        startAfter(lastVisible),
        limit(BLOGS_PER_PAGE)
      );
    }

    const querySnapshot = await getDocs(q);
    const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Blog[];

    return {
      blogs,
      lastVisible: lastVisibleDoc,
      hasMore: querySnapshot.docs.length === BLOGS_PER_PAGE,
    };
  } catch (error) {
    console.error("Error getting blogs:", error);
    throw error;
  }
}

export async function createBlog(data: BlogFormData, author: string) {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...data,
      date: new Date().toISOString(),
      author,
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
}

export async function updateBlog(id: string, data: Partial<BlogFormData>) {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    throw error;
  }
}

export async function deleteBlog(id: string) {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
}

export async function getBlogById(id: string) {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as Blog;
    }
    return null;
  } catch (error) {
    console.error("Error getting blog:", error);
    throw error;
  }
} 